export default function Posts() {
    const posts = [
        { id: 1, text: "I feel good today", timestamp: "A minute ago", author: { fullname: "Susan Wills", }, },
        { id: 2, text: "The weather outside is fabulous", timestamp: "A while ago", author: { fullname: "Bruce Bean", }, },
    ];

    return (
        <ul>
            {posts.map(post => {
                return (
                  <li key={post.id}>
                    <strong>{post.author.fullname}</strong> &mdash; {post.timestamp}
                    <p>{post.text}</p>
                    <br />
                  </li>
                )
            })}
        </ul>
    );
};