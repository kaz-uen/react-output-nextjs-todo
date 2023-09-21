import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <h1>Todo List</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link href="/">TOP</Link>
          </li>
          <li>
            <Link href="/create">新規作成</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
