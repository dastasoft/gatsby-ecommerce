import React, { useState, useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { Image, Transformation } from "cloudinary-react"

import ColourSelect from "../components/colour-select"

// Provide your domain for Snipcart validations
const domain = ""

const ProductPage = ({ data }) => {
  const [colourTransformation, setColour] = useState("")
  let [imgsrc, setImgsrc] = useState("")
  let [colourName, getColour] = useState("")
  const imageRef = useRef(null)

  useEffect(() => {
    setImgsrc(() => imageRef.current.element.src)
    if (imageRef.current && imageRef.current.element) {
      const observer = new MutationObserver(muts => {
        muts.forEach(m => {
          if (m.type === "attributes" && m.attributeName === "src") {
            setImgsrc(() => m.target.setImgsrc)
          }
        })
      })
      observer.observe(imageRef.current.element, {
        attributes: true,
      })
    }
  }, [imgsrc])

  if (colourName.length === 0) {
    getColour(() => (colourName = "original"))
  }

  return (
    <div className="flex flex-col md:flex-row">
      <Image
        ref={imageRef}
        cloudName="dtxcebrvm"
        publicId={data.markdownRemark.frontmatter.image}
        width="600"
        crop="scale"
        fetchFormat="auto"
        quality="auto"
        secure="true"
        className="h-full w-full md:mx-8 rounded-lg"
      >
        <Transformation rawTransformation={colourTransformation} />
      </Image>
      <div className="mt-4 md:mt-0 md:w-2/3 md:mx-8">
        <Link to="/products" className="font-bold text-red-600">
          ← Back to products
        </Link>
        <h1 className="font-bold text-4xl text-black-900">
          {data.markdownRemark.frontmatter.name}
        </h1>
        <span className="block font-semibold text-lg text-red-600">
          {data.markdownRemark.frontmatter.price}$
        </span>
        <button
          className="btn btn-green mt-4 snipcart-add-item"
          data-item-id={data.markdownRemark.frontmatter.id}
          data-item-custom1-name="Colour"
          data-item-custom1-options={colourName}
          data-item-price={data.markdownRemark.frontmatter.price}
          data-item-url={`${domain}${data.markdownRemark.fields.slug}`}
          data-item-name={data.markdownRemark.frontmatter.name}
          data-item-image={imgsrc}
        >
          Add to cart
        </button>
        <div
          className="markdown mt-4"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        {data.markdownRemark.fields.slug === "/products/winter-jumper/" ? (
          <ColourSelect changeColour={setColour} getColourName={getColour} />
        ) : null}
      </div>
    </div>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        id
        name
        price
        image
      }
      fields {
        slug
      }
    }
  }
`
