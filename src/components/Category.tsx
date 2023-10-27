import CategoryCard from "./CategoryCard"

const data = [
    {
        id: 0,
        name: "Fresh Vegatables",
        count: "9 Products",
        img: "/category/fresh_vegetables.webp",
    },
    {
        id: 1,
        name: "Canned Goods",
        count: "8 Products",
        img: "/category/canned_goods.webp",
    },
    {
        id: 2,
        name: "Meats Seafood",
        count: "7 Products",
        img: "/category/meats_seafood.webp",
    },
    {
        id: 3,
        name: "Fresh Fruits",
        count: "6 Products",
        img: "/category/fresh_fruits.webp",
    },
    {
        id: 4,
        name: "Bread Bakery",
        count: "5 Products",
        img: "/category/bread_bakery.webp",
    },
    {
        id: 5,
        name: "Eggs Dairy",
        count: "4 Products",
        img: "/category/eggs_dairy.webp",
    },
    {
        id: 6,
        name: "Soft Drinks",
        count: "3 Products",
        img: "/category/soft_drinks.webp",
    },
    {
        id: 7,
        name: "Fresh Fruits",
        count: "2 Products",
        img: "/category/fresh_fruits.webp",
    },
]

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((el) => (
                <CategoryCard
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    count={el.count}
                />
            ))}
        </div>
    </div>
  )
}

export default Category