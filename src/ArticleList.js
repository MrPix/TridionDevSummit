import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import "./assets/css/owl.css";
import ArticleShort from "./ArticleShort";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ArticleList = () => (
  <div className="latest-products">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Business applications</h2>
          </div>
        </div>
        <Query
          query={gql`
          {
            items(filter: {itemTypes: COMPONENT, publicationIds: 1, schema:{id: 49}}) {
              edges {
                
                node {
                  ...ComponentFields
                }
              }
            }
          }
          
          fragment ComponentFields on Component {
            itemId
            content {
              ... on UntypedContent {
                data 
              }
            }
          }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.items.edges.map((currentProduct) => {
              const item = currentProduct.node;
              const data = item.content.data;
              return <ArticleShort key={item.itemId} id={item.itemId} title={data.Title} shortDescription={data.ShortDescription} imageId={data.Image.id}/>;
            });
          }}
        </Query>
      </div>
    </div>
  </div>
);
export default ArticleList;
