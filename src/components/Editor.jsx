import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Editor = ({ value, setValue }) => {
    // const [value, setValue] = useState('');
    return <ReactQuill theme="snow" value={value} onChange={setValue}/>;
}
