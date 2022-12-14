import { useEffect } from "react";
import { StyledHome } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../redux/slices/cryptoSlice";
import axios from "axios";
import CryptoBlock from "../../components/CryptoBlock/CryptoBlock";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.crypto.items);
  const fetchCryptos = async () => {
    try {
      const { data } = await axios.get("https://api.coincap.io/v2/assets");
      dispatch(setItems(data.data));
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchCryptos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Items = ({ currentItems }) => {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => <CryptoBlock key={item.id} {...item} />)}
      </>
    );
  };

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return (
    <StyledHome>
      <div className="container">
        <table className="crypto-table">
          <thead>
            <tr>
              <th className="column-title">Coins</th>
              <th className="column-title">#</th>
              <th className="column-title">Price</th>
              <th className="column-title">24h</th>
              <th className="column-title">Volume(24h)</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {<PaginatedItems itemsPerPage={10} />}
          </tbody>
        </table>
      </div>
    </StyledHome>
  );
}
