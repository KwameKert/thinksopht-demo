import React from "react";

/**
 * @author
 * @function AboutUsDetails
 **/

export default class AboutUsDetails {
  render() {
    const { readMore } = this.props;
    return (
      <div>
        <button>read more</button>
        {readMore && readMore === "!clicked" ? null : (
          <div>aboutus details</div>
        )}
        <h2>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.Magnam dolores
          commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
          quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
          Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste
          officiis commodi quidem hic quas.Magnam dolores commodi suscipit.
          Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
          impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
          quidem hic quas.Magnam dolores commodi suscipit. Necessitatibus eius
          consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
          Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
          ea. Quia fugiat sit in iste officiis commodi quidem hic quas.Magnam
          dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
          fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam
          cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
          iste officiis commodi quidem hic quas.
        </h2>
      </div>
    );
  }
}

export default AboutUsDetails;
