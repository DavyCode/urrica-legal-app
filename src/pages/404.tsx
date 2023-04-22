import React from 'react'
import Link from 'next/link'
function Custom404(): JSX.Element {
  return (
      <section>
        <div>
            <div className="error-details">
              <h2 className="error-text">
                Sorry!!! <br /> Looks like no one is home.
              </h2>
            </div>
            <div>
              <Link href="/" legacyBehavior>
                <a className="btn success">Back to Home</a>
              </Link>
            </div>
          </div>
      </section>
  )
}

export default Custom404
