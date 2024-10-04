import {Avatar, Button, FieldInput} from "@/components/index.js";
import Link from "@/components/Link.jsx";
import {useProfile} from "@/hooks/useProfile.js";

const Profile = () => {

    const { fields, fieldsValue, id, setFieldsValue } = useProfile();

    return (
        <div className={'flex flex-col gap-8'}>
            <h2 className={'text-xl font-medium'}>Профиль</h2>

            <div className={'flex items-center justify-center w-full'}>
                <div className={'flex flex-col-reverse items-center sm:flex-row gap-20 max-w-[600px] w-full'}>
                    <div className={'flex flex-col gap-4 w-full items-start'}>
                        {fields.map((field, index) =>
                            <FieldInput
                                type={field.type}
                                key={index}
                                value={fieldsValue[index]}
                                onChange={e => setFieldsValue(prevState => [...prevState, prevState[index] = e.target.value])}
                                placeholder={field.placeholder}/>
                        )}
                        <Button title={'Сохранить'} style={'rounded-md text-xs'}/>
                    </div>
                    <div className={'flex-shrink-0 flex flex-col gap-3'}>
                        <Avatar image={'https://randomuser.me/api/portraits/men/7.jpg'} isRounded={false}
                                hasBorder={false} size={'xl'}/>
                        <label htmlFor={id}>
                            <Link title={'выбрать  аватар'}/>
                            <input type={'file'} hidden accept={'image/*'} id={id}/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
