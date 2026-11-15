import { createContext, useContext, useState, useEffect } from "react";
const apiUrl = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:6004';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    const token = localStorage.getItem("token");
    console.log("Token exists:", !!token);

    const fetchwishlist = async () => {
        if (!token) {
            setWishlist([]);
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/api/wishlist`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch wishlist");
            }

            const data = await response.json();
            setWishlist(data.wishlist);

        } catch (error) {
            console.error("Error fetching wishlist:", error);
        };
    };
    const toggleWishlist = async (productId) => {
        if (!token) {
            console.error("User is not authenticated");
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/api/wishlist/toggle`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ productId })
            });

            const data = await response.json();

            console.log("wishlist API status:", response.status);
            console.log("wishlist API response:", data);

            if (!response.ok) {
                throw new Error(data.message || "Failed to toggle wishlist");
            }
            setWishlist(data.wishlist || []);
            
        } catch (error) {
            console.error("Error toggling wishlist:", error);
        }

        console.log("Clicked Product ID:", productId);
    };
    const removeWishlist = async (productId) => {

        try {
            const response = await fetch(`${apiUrl}/api/wishlist/${productId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to remove from wishlist");
            }
            setWishlist(data.wishlist);
        } catch (error) {
            console.error("Error removing from wishlist:", error);
        }
    };

    useEffect(() => {
        fetchwishlist();
    }, [token]);

    return (
        <WishlistContext.Provider value={{
            wishlist,
            toggleWishlist,
            removeWishlist,
            fetchwishlist
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}