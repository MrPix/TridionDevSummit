import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import "./assets/css/owl.css";
import { useParams } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ArticleImage from "./ArticleImage";

function Article() {
  const { id } = useParams();

  return (
    <Query
      query={gql`
          {
            getFullArticle(namespaceId: 1, publicationId: 1, componentId: ${id}) {
              title
              shortDescription
              content
              imageId
            }
          }
          `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const item = data.getFullArticle;
        return (
          <div className="best-features">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>{item.title}</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="left-content">
                    <h4>{item.shortDescription}</h4>
                    <p>{item.content}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-image">
                    <ArticleImage imageId={item.imageId}></ArticleImage>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
}
export default Article;
