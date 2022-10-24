import React from "react"
import common from "../../../css/common.module.css"
import styles from "./card.module.css"

function Component({ title, children }) {
  return (
    <>
      <div className={styles.deploymentModel}>
        <div
          className={styles.deploymentModelTitle}
        >
          {title}
        </div>
        <div className="accordion-content">{children}</div>
      </div>
    </>
  )
}

export default Component
