import React from 'react'
import { Button, Stack } from '@mui/material';
import { categories } from '../utils/constants';

const SideBar = ({ selectcategory, setselectedcategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' },
        }}
    >
        {categories.map((category) => (
            <Button
                className="category-btn"
                onClick={() => setselectedcategory(category.name)}
                style={{
                    background: category.name === selectcategory && 'red',
                    color: 'white',
                }}
                key={category.name}
            >
                <span
                    style={{
                        color: category.name === selectcategory ? 'white' : 'red',
                        marginRight: '15px',
                    }}
                >
                    {category.icon}
                </span>
                <span style={{ opacity: category.name === selectcategory ? '1' : '0.8' }}>
                    {category.name}
                </span>
            </Button>
        ))}
    </Stack>
);


export default SideBar