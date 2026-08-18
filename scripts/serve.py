#!/usr/bin/env python3
"""Local preview server that mirrors netlify.toml.

Plain `python3 -m http.server` does not apply the redirects, so /support
and /privacy 404 and unknown paths never reach 404.html. This does both,
so what you see locally is what Netlify serves.

    python3 scripts/serve.py [port]
"""

import http.server
import os
import socketserver
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4173

# [[redirects]] with status 200 in netlify.toml
REWRITES = {
    "/support": "/support.html",
    "/privacy": "/privacy.html",
}


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        clean = path.split("?", 1)[0].split("#", 1)[0].rstrip("/") or "/"
        if clean in REWRITES:
            path = REWRITES[clean]
        return super().translate_path(path)

    def send_error(self, code, message=None, explain=None):
        """Serve the real 404 page, matching the catch-all redirect."""
        if code == 404:
            page = os.path.join(ROOT, "404.html")
            if os.path.exists(page):
                with open(page, "rb") as handle:
                    body = handle.read()
                self.send_response(404)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                if self.command != "HEAD":
                    self.wfile.write(body)
                return
        super().send_error(code, message, explain)

    def end_headers(self):
        # The headers netlify.toml sets, so local behaviour matches too.
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, fmt, *args):
        sys.stderr.write("  %s\n" % (fmt % args))


class Server(socketserver.TCPServer):
    allow_reuse_address = True


if __name__ == "__main__":
    with Server(("127.0.0.1", PORT), Handler) as httpd:
        print(f"Reaper site on http://localhost:{PORT}")
        print("  /            landing")
        print("  /support     App Store Connect support URL")
        print("  /privacy     App Store Connect privacy URL")
        print("  /anything    404 page")
        print("Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")
