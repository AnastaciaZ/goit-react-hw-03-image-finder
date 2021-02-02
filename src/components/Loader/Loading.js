import React from 'react';
import Loader from "react-loader-spinner";
import s from '../Loader/Loading.module.css';

const Loading = () => {
    return (
        <div className={s.loader}>
            <Loader
                type="ThreeDots"
                color="#3f51b5"
                height={50}
                width={50}
                timeout={2000} />
        </div>
    );
};

export default Loading;