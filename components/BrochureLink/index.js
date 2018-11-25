import React from 'react'

const downloadBrochure = () => window.open('static/brochure.pdf')

const BrochureLink = ({ children }) => <a onClick={downloadBrochure}>{children}</a>

export default BrochureLink
