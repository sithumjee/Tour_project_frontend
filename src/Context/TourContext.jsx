import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { booking_list } from "../assets/assests";

export const TourContext = createContext(null);

const TourContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState(booking_list); // Initialize with dummy bookings
  const [ReviewsList, setReviewList] = useState([]);
  const [tourList, setTourList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [guideList, setGuideList] = useState([]); // New state for guides
  const url = "http://localhost:8000";
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const clearCart = () => {
    setCartItems({});
  };

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      delete newCartItems[itemId];
      return newCartItems;
    });
  };

  const addBooking = async (tour) => {
    const newBooking = {
      id: bookings.length + 1,
      tour: tour,
      createdAt: new Date().toISOString(),
    };
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Fetch Tour List
  const fetchTourList = async () => {
    try {
      const response = await axios.get(
        url + "/api/v1/tours/?page=1&limit=100",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const tours = response.data.allDocs || [];
      setTourList(tours);
    } catch (error) {
      console.error("Error fetching tour list:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      if (token) {
        setLoading(true);
        await fetchTourList();
        setLoading(false);
      } else {
        setTourList([]);
      }
    };

    loadData();
  }, [token]);

  // Fetch User List
  const fetchUserList = async () => {
    try {
      const response = await axios.get(url + "/api/v1/users/?page=1&limit=50", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const userlist = response.data.allDocs || [];
      setUserList(userlist);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      if (token) {
        setLoading(true);
        console.log("Fetching user list...");
        await fetchUserList();
        setLoading(false);
      } else {
        setUserList([]);
      }
    };
    loadUsers();
  }, [token]);

  // Update guideList based on userList
  useEffect(() => {
    const filteredGuides = userList.filter(
      (user) => user.role === "guide" || user.role === "lead-guide" // Adjust this condition based on your user structure
    );
    setGuideList(filteredGuides);
  }, [userList]);

  // Fetch Review List
  const fetchReviewList = async () => {
    try {
      const response = await axios.get(
        url + "/api/v1/reviews?page=1&limit=500",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const reviewlist = response.data.allDocs || [];
      console.log(reviewlist);
      setReviewList(reviewlist);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  useEffect(() => {
    const loadReviews = async () => {
      if (token) {
        setLoading(true);
        console.log("Fetching review list...");
        await fetchReviewList();
        setLoading(false);
      } else {
        setReviewList([]);
      }
    };
    loadReviews();
  }, [token]);

  const contextValue = {
    addToCart,
    removeFromCart,
    user,
    ReviewsList,
    tourList,
    userList,
    guideList, // Include guideList in context value
    cartItems,
    bookings,
    url,
    token,
    setToken,
    setTourList,
    setUserList,
    setReviewList,
    setUser,
  };

  return (
    <TourContext.Provider value={contextValue}>
      {!loading && props.children}
    </TourContext.Provider>
  );
};

export default TourContextProvider;
