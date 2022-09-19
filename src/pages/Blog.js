import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    document.title = "blog";
    async function getArticles() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles`
      );

      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <p className="section-description">
        Berikut ini adalah tulisan-tulisanku (tapi bo'ong):
      </p>

      {loading && <i>Loading articles ...</i>}
      {!loading && (
        <div className="articles">
          {articles.map(function (article) {
            return (
              <articles key={article.id} className="article">
                <h2 className="article-title">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h2>
                <time className="article-time">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </time>
              </articles>
            );
          })}
        </div>
      )}
    </section>
  );
}
