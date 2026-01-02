import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readProductList } from "../API/functions/Read.api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import { deleteProduct } from "../API/functions/delete.api";
import FilterSidebar from "../Components/FilterSidebar";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [originalData, setOriginalData] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const fetchProduct = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await readProductList();
      setData(res);
      setOriginalData(res);
    } catch {
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleApplyFilter = (filters) => {
    let filtered = originalData;

    if (filters.size.length > 0) {
      filtered = filtered.filter((item) =>
        item.size?.some((val) => filters.size.includes(val))
      );
    }

    if (filters.color.length > 0) {
      filtered = filtered.filter((item) =>
        item.color?.some((val) => filters.color.includes(val))
      );
    }

    if (filters.brand.length > 0) {
      filtered = filtered.filter((item) =>
        item.brand?.some((val) => filters.brand.includes(val))
      );
    }

    setData(filtered);
    setCurrentPage(1); 
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div style={{ display: "flex" }}>
        <FilterSidebar onApply={handleApplyFilter} />

        <div style={{ marginLeft: "20px", flex: 1 }}>
          <h1 className="text-center mt-3">Home Page</h1>
          <h2 className="text-center text-primary mt-3">All Products</h2>

          <div className="text-center mt-3">
            <Link to="/create">
              <button type="button" className="btn btn-primary">
                Add Product
              </button>
            </Link>
          </div>

          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <p className="text-danger text-center">{error}</p>
          ) : (
            <>
              <div
                className="d-flex flex-wrap justify-content-center gap-4 mt-4"
                style={{ paddingBottom: "40px" }}
              >
                {currentItems?.map((item) => (
                  <Card style={{ width: "18rem" }} key={item?._id}>
                    <Card.Body className="text-center">
                      <Card.Title className="fw-bold">{item?.name}</Card.Title>
                      <Card.Text className="mb-1">₹ {item?.price}</Card.Text>
                      <Card.Text>Color: {item?.color}</Card.Text>
                      <Card.Text>Size: {item?.size}</Card.Text>
                      <Card.Text>Brand: {item?.brand}</Card.Text>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Link to={`/update/${item?._id}`}>
                          <Button variant="primary">Edit</Button>
                        </Link>

                        <Link to={`/details/${item?._id}`}>
                          <Button variant="warning">Details</Button>
                        </Link>

                        <Button
                          variant="danger"
                          onClick={() => handleDelete(item?._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

          
              {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                  <Pagination>
                    <Pagination.Prev
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    />

                    {[...Array(totalPages)].map((_, index) => (
                      <Pagination.Item
                        key={index}
                        active={index + 1 === currentPage}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    ))}

                    <Pagination.Next
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    />
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
