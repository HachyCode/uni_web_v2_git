import React, { Component, useState } from 'react'
import Select from 'react-select'


const options = [
    { value: '1', label: 'A-Level' },
    { value: '2', label: 'AS-Level' },

    { value: '3', label: 'A-Level Double Award' },
    { value: '4', label: 'AS-Level Double Award' },

    { value: '5', label: 'IBO Certification in Theory of Knowledge' },
    { value: '6', label: 'IBO Certification in Standard Level' },
    { value: '7', label: 'IBO Certification in Higher Level' },
    { value: '8', label: 'IBO Certification in Extended Essay' },

    { value: '9', label: 'Scottish Higher' },
    { value: '10', label: 'Scottish Advanced Higher' },

    { value: '11', label: 'OCR National Extended Diploma' },
    { value: '12', label: 'OCR National Diploma' },
    { value: '13', label: 'OCR National Certificate' },

    { value: '14', label: 'Edexel BTEC National Award' },
    { value: '15', label: 'Edexel BTEC National Certification' },
    { value: '16', label: 'Edexel BTEC National Diploma' },

    { value: '17', label: 'T Level' },
]

const SelectQualification = () => (
    <Select
    placeholder='Select Qualification'
    options={options}
    theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors:{
        ...theme.colors,
        primary25: '#b2dddf',
        primary: '#f08575',
    },})} />
)

export default SelectQualification
