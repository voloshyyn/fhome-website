const items = [
    {
        player: {
            image: "img/products/chest-of-drawers-img.jpg",
            title: "Erica Chest of Drawers",
            price: "$150,00USD",
            button: "Add to Cart"
        }
    },
    {
        player: {
            image: "img/products/green-chair-img.jpg",
            title: "Ultimate Green Chair",
            price: "$110,00USD",
            button: "Add to Cart"
        }
    },
    {
        player: {
            image: "img/products/green-chair-img.jpg",
            title: "Snitch Cabinet",
            price: "$90,00USD",
            button: "Add to Cart"
        }
    },
    {
        player: {
            image: "img/products/armchair-img.jpg",
            title: "Lord Armchair",
            price: "$220,00USD",
            button: "Add to Cart"
        }
    }
];

const length = items.length;
items.push(...items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, index) => {
    const item = {
        styles: {
            transform: `translate(${position * slideWidth}rem)`
        },
        player: items[index].player
    };

    const windowWidth = window.innerWidth;

    if (windowWidth >= 850 && windowWidth <= 1200) {
        item.styles = { ...item.styles, filter: "none", opacity: 1 };
        return item;
    }

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = { ...item.styles, filter: "grayscale(1)" };
            break;
        case length:
            break;
        default:
            item.styles = { ...item.styles, opacity: 0 };
            break;
    }
    return item;
};

const CarouselSlideItem = ({ position, index, activeIndex }) => {
    const item = createItem(position, index, activeIndex);

    return (
        <div class="best-selling__product" style={item.styles}>
            <div class="best-selling__badge">
                <p class="best-selling__badge-text">
                    <span class="best-selling__badge-highlight-bestseller">Bestseller</span>
                </p>
                <img class="best-selling__image" src={item.player.image} alt={item.player.title} />
            </div>
            <div class="best-selling__name">
                <a class="best-selling__link" href="#">{item.player.title}</a>
            </div>
            <div class="best-selling__price">
                <p class="best-selling__price-text">
                    <span class="best-selling__price-highlight">{item.player.price}</span>
                </p>
            </div>
            <div class="best-selling__action">
                <a class="best-selling__action-link" href="#">{item.player.button}</a>
            </div>
        </div>

    );
};

const keys = Array.from(Array(items.length).keys());

const Carousel = () => {
    const [items, setitems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
            });
        }
    };

    const handleDotClick = (index) => {
        if (index < activeIndex) prevClick(activeIndex - index);
        if (index > activeIndex) nextClick(index - activeIndex);
    };

    React.useEffect(() => {
        if (isTicking) {
            sleep(300).then(() => setIsTicking(false));
        }
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIndex((length - (items[0] % length)) % length)
    }, [items]);

    return 
}