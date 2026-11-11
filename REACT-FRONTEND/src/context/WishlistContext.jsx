import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    const token = localStorage.getItem("token");

    const fetchwishlist = async () => {
        if (!token) {
            setWishlist([]);
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/wishlist`, {
                headers: {
                    "Authorization": `Bearer${token}`
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
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/wishlist/toggle`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ productId })
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Failed to toggle wishlist");
            }
            setWishlist(data.wishlist);
        } catch (error) {
            console.error("Error toggling wishlist:", error);
        }

        console.log("Clicked Product ID:", productId);
    };
    const removeFromWishlist = async (productId) => {

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/wishlist/${productId}`, {
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
            removeFromWishlist,
            fetchwishlist
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}