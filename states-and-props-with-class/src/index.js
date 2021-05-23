import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import FilterableProductTable from './App';
import reportWebVitals from "./reportWebVitals";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
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

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {

      console.log(product)
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
        <tbody>
        {rows}
        </tbody>
      </table>
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
    const name = product.stocked ? 
    product.name: 
    <span style={{ color: "red" }}>
       {product.name}
       </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
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

        <ProductTable products={this.props.products}
                  filterText={this.state.fitlerText}
                  inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById("root")
);

*/

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }
  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => 
      this.tick(), 1000
    );
  }

  componentWillUnmount(){

    clearInterval(this.timerID)
  }

  render(){

    return(<div>
      <h1> React Clock</h1>
      <h2> it is {this.state.date.toLocaleTimeString()} </h2>
    </div>)
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
