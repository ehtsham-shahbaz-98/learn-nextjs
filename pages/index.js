import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <Link href="/about">Visit about page</Link>
        </>
    );
}
