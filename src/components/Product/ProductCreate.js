import React, { useState, useContext } from "react";
import ProductsContext from "../../context/product";
// import ADHeader from "../../pages/AdminPages/ADHeader";

function ProductCreate() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [weight, setWeight] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");

    const { createProduct } = useContext(ProductsContext);

    const handleImageChange = (event) => {
        const selectedImage = event.target.files && event.target.files[0];
        if(selectedImage) {
            setImage(URL.createObjectURL(selectedImage));
        }
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     createProduct(name, category, description, image, weight, price, available);
    //     setName("");
    //     setCategory("");
    //     setDescription("");
    //     setImage(null);
    //     setWeight("");
    //     setPrice("");
    //     setAvailable("");
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        createProduct(name, category, description, imageUrl, weight, price, available);
        setName("");
        setCategory("");
        setDescription("");
        setImageUrl("");
        setWeight("");
        setPrice("");
        setAvailable("");
    };

    return <div className="w-2/4 ml-60">
        <div className="mt-2 w-full flex-grow mb-10 px-5"
            onSubmit={handleSubmit}
        >
            <div className="container border px-5 py-5 shadow-sm">
                <div className="flex justify-center">
                    <div className="text-3xl font-bold">THÊM SẢN PHẨM</div>
                </div>

                <label className="label mt-3 font-medium">Tên sản phẩm</label>
                <input className="input" value={name} onChange={(e) => setName(e.target.value)}></input>

                <div className="field">
                    <label className="label mt-3 font-medium">Loại sản phẩm</label>
                    <div className="select">
                        <select className="input select" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option>Chọn phân loại</option>
                            <option value="option 1">Cá Hồi</option>
                            <option value="option 2">Cua, Ghẹ</option>
                            <option value="option 3">Cá Các Loại</option>
                            <option value="option 4">Ngao, Sò, Ốc</option>
                            <option value="option 5">Tôm Các Loại</option>
                            <option value="option 6">Mực Các Loại</option>
                            <option value="option 7">Chế Biến Sẵn</option>
                            <option value="option 8">Gia Vị - Sôt</option>
                        </select>
                    </div>
                </div>

                <label className="label mt-3 font-medium">Mô tả sản phẩm</label>
                <input className="input" value={description} onChange={(e) => setDescription(e.target.value)}></input>

                {/* <label className="label mt-3 font-medium">Đường dẫn hình ảnh</label>
                <input className="input" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input> */}

                <label>Hình ảnh sản phẩm</label>
                <label className="block">
                    <input
                        id="file_input"
                        type="file"
                        onChange={handleImageChange}
                        className="mx-auto ml-5 flex w-full justify-center border-yellow-400 text-sm outline-none file:mr-4 file:bg-amber-400 file:py-2 file:px-4 file:text-sm file:font-semibold"
                    />
                </label>
                {/* Display selected image */}
                {image && <img src={image} alt="Selected Product" style={{ width: "200px", height: "200px" }} />}


                <label className="label mt-3 font-medium">Trọng lượng</label>
                <input className="input" value={weight} onChange={(e) => setWeight(e.target.value)}></input>

                <label className="label mt-3 font-medium">Giá</label>
                <input className="input" value={price} onChange={(e) => setPrice(e.target.value)}></input>

                <label className="label mt-3 font-medium">Số lượng tồn</label>
                <input className="input" value={available} onChange={(e) => setAvailable(e.target.value)}></input>

                <button className="my-5 w-full py-2 text-white bg-amber-500 rounded">
                    THÊM SẢN PHẨM
                </button>
            </div>
        </div>
    </div>;
}

export default ProductCreate;