import Link from "next/link";

export default function About() {
    return (
        <>
            <h1>The About Page</h1>
            <p>This is the about content. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <Link href="/">back to homepage</Link>
        </>
    );
}