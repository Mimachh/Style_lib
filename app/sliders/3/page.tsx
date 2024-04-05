import Image from "next/image";



const products = [
    {
        id: 1,
        title: "Aerphone GHTK",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor",
        image: {
            path: "/slider2/1.png",
            alt: ""
        },
        topic: "Aerphone GHTK",
        specifications: [
            { title: "Used Time", des: "6 hours" },
            { title: "Charging port", des: "Type-C" },
            { title: "Compatible", des: "Android" },
            { title: "Bluetooth", des: "5.3" },
            { title: "Controlled", des: "Touch" },
        ]
    }
]

export default function page() {

    // https://github.com/HoanghoDev/slider_3/blob/main/index.html
    // https://www.youtube.com/watch?v=hfGz5AgHT-E&ab_channel=LunDev
    return (
        <div className="carousel-shop">
            <div className="list">
                {products.map((item) => (
                    <div
                    key={item.id}
                    className="item">
                        <Image
                            width={500}
                            height={500}
                            src={item.image.path}
                            alt={item.image.alt}
                        />
                        <Introduce
                            title={item.title}
                            topic={item.topic}
                            des={item.des}
                        />
                        <Detail
                            title={item.title}
                            des={item.des}
                            specifications={item.specifications}
                        />
                    </div>
                ))}
            </div>
            <div className="arrows">
                {/* <button id="prev"><</button>
            <button id="next">></button> */}
                <button id="back">See All  &#8599</button>
            </div>
        </div>

    )
}

interface IntroduceProps {
    title: string;
    topic: string;
    des: string;

}

const Introduce = (props: IntroduceProps) => {
    const { title, topic, des } = props;
    return (
        <div className="introduce">
            <div className="title">{title}</div>
            <div className="topic">{topic}</div>
            <div className="des">{des}</div>
            <button className="seeMore">SEE MORE &#8599</button>
        </div>
    )
}

interface DetailProps {
    title: string;
    des: string;
    specifications: { title: string, des: string }[];
}
const Detail = (props: DetailProps) => {
    const { title, des, specifications } = props;
    return (
        <div className="detail">
            <div className="title">{title}</div>
            <div className="des">{des}</div>
            <div className="specifications">
                {specifications.map((item, index) => (
                    <div key={index}>
                        <p>{item.title}</p>
                        <p>{item.des}</p>
                    </div>
                ))}
            </div>
            <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
            </div>
        </div>
    )
}
