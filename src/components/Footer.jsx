export default function Footer() {
    return (
        <footer className="page-footer teal lighten-1 center">
            <div className="container">
                © {new Date().getFullYear()} @sereneouters
            </div>
        </footer>
    );
}