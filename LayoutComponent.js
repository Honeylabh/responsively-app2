// src/components/LayoutComponent.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetLayout } from '../redux/actions';
import './styles.css'; // Make sure to import your styles

const LayoutComponent = () => {
    const dispatch = useDispatch();

    const handleResetLayout = () => {
        dispatch(resetLayout());
    };

    return (
        <div className="layout-container">
            {/* Your existing layout code */}
            <button className="reset-button" onClick={handleResetLayout}>
                Reset Layout
            </button>
        </div>
    );
};

export default LayoutComponent;

