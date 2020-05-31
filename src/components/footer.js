import React from "react"

const Footer = ({ metaData }) => {
  return (
    <footer className="flex p-2 bg-black text-white text-sm border-t-2 border-red-600 justify-center">
      © {metaData.title}, {new Date().getFullYear()}, Brought to you by{" "}
      {metaData.author} (
      <a href={metaData.companyWebsite} className="link underline">
        {metaData.company}
      </a>
      )
    </footer>
  )
}

export default Footer
