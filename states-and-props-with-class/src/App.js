import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     this.setState({ liked: !this.state.liked });
//   }

//   render() {
//     var text = this.state.liked ? "like" : "have not liked ! ";

//     return <p onclick={this.handleClick}>you {text} this. click to Toggle</p>;
//   }
// }

// class App extends React.Component{

//   constructor(props){

//     super(props)
//     this.state = {
//       header: "Header from state..",
//       content: "Content from state"
//     }

//   }
//   render(){

//     <div>

//       <h1>{this.state.header}</h1>
//       <h2></h2>
//     </div>
//   }

// }

/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true}
    this.handleClick = this.handleClick.bind(this)


  }

  handleClick(){
    this.setState(prevState =>({
        isToggleOn: !prevState.isToggleOn
    }))

  }

    render(){

      return(

        <button onClick={this.handleClick}>
          {this.state.isToggleOn ?'ON': 'OFF'}
        </button>
      );
    }

  
} */

/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Inital Data...",
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({
      data: "From child...",
    });
  }

  render() {
    return (
      <div>
        <Content
          myDataProp={this.state.data}
          updateStateProp={this.updateState}
        ></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.updateStateProp}>CLICK</button>
        <h3>{this.props.myDataProp}</h3>
      </div>
    );
  }
}
 */

/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };

    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  updateState(e) {
    this.setState({
      data: e.target.value,
    });
  }

  clearInput(){

      this.setState({data:' '});
      //ReactDOM.findDOMNode(this.refs.myInput).focus();

  }

  render() {
    return (
      <div>
        <input value={this.state.data} onChange={this.updateState} ref="myInput"></input>
        <button onClick={this.clearInput}>CLEAR</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}

 */

const PRODUCTS = [
  {
    category: "sporting goods",
    price: "$49.9",
    stocked: true,
    name: "Football",
  },
  {
    category: "sporting goods",
    price: "$49.9",
    stocked: true,
    name: "Football",
  },
  {
    category: "sporting goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "sporting goods",
    price: "$29.9",
    stocked: true,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.9",
    stocked: true,
    name: "iphone Touch",
  },
  { category: "Electronics", price: "$399.9", stocked: true, name: "iphone 5" },
  { category: "Electronics", price: "$199.9", stocked: true, name: "Nexus 7" },
];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextFilterChange = this.handleTextFilterChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleTextFilterChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInstockChange(e.target.locked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search.."
          value={this.props.filterText}
          onChange={this.handleTextFilterChange}
        ></input>
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          ></input>{" "}
          Only show some products in the stock
        </p>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );

        rows.push(<ProductRow product={product} key={product.name} />);

        lastCategory = product.category;
      }
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
      </table>
    );
  }
}
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fitlerText: "",
      inStockOnly: false,
    };

    this.handleTextFilterChange = this.handleTextFilterChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleTextFilterChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.fitlerText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleTextFilterChange}
          onInstockChange={this.handleInStockChange}
        />

        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default FilterableProductTable;


ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById("root")
);

