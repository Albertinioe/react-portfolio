import StoriesCard from "@/components/StoriesCard.jsx";
import ImageStory1  from "@/assets/story_1.png";
import ImageStory2  from "@/assets/story_2.png";
import ImageStory3  from "@/assets/story_3.png";
import ImageStory4  from "@/assets/story_4.png";

const Stories = () => {
    const stories = [
        {
            image: ImageStory1,
            title: 'Отдыхаю на природе',
            date: '21.09.2020',
        },
        {
            image: ImageStory2,
            title: 'Заканчиваю сложный проект',
            date: '21.09.2020',
        },
        {
            image: ImageStory3,
            title: 'Переехал в новую квартиру',
            date: '21.09.2020',
        },
        {
            image: ImageStory4,
            title: 'Осень пришла!',
            date: '21.09.2020',
        }
    ]
    return (
        <div className={'flex gap-3 overflow-x-scroll scroll-m-0 no-scrollbar'}>
            {stories.map((story, index) =>
                <StoriesCard key={index} story={story} />
            )}
        </div>
    );
};

export default Stories;
