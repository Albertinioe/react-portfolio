import ImagePost1 from "@/assets/post_1.png";
import ImagePost2 from "@/assets/post_2.png";
import ImagePost3 from "@/assets/post_3.png";
import ImageWork1 from "@/assets/work_1.png";
import ImageWork2 from "@/assets/work_2.png";

export const posts = [
    {
        id: 0,
        title: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
        date: '21.06.2020',
        tag: '',
        image: null,
        isMore: false
    },
    {
        id: 1,
        title: 'Как писать код быстро и безболезненно?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
        date: '21.06.2020',
        tag: 'создание сайтов',
        image: ImagePost1,
        isMore: false
    },
    {
        id: 2,
        title: 'Купил новый ноутбук за 150 000 руб',
        text: '',
        date: '21.06.2020',
        tag: 'продвижение видео',
        video: ImagePost2,
        isMore: false
    },
    {
        id: 3,
        title: 'Как я сходил на FrontEnd Conf 2021',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
        date: '21.06.2020',
        tag: 'создание сайтов',
        image: ImagePost3,
        isMore: false
    }
]

export const relatedPosts = [
    {
        title: 'Как я сходил на FrontEnd Conf 2021',
        date: '21.06.2020'
    },
    {
        title: 'Как писать код быстро и ...',
        date: '21.06.2020'
    },
    {
        title: 'Купил новый ноутбук за 150 000 руб',
        date: '21.06.2020'
    },
    {
        title: 'Купил новый ноутбук за 150 000 руб',
        date: '21.06.2020'
    }
]

export const comments = [
    {
        text: 'Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat',
        date: '1 неделю назад',
        name: 'Дмитрий Валак',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        text: 'Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat',
        date: '1 неделю назад',
        name: 'Джонни',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        isAnswer: true
    },
]

export const works = [
    {
        image: ImageWork1,
        name: 'altermono.com',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
        tags: [
            'дизайн', 'создание сайта', 'SMM'
        ]
    },
    {
        image: ImageWork2,
        name: 'codedoco.com',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id.',
        tags: [
            'дизайн', 'создание сайта', 'SMM'
        ]
    }
]
