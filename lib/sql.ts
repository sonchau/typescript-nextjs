//getStaticPaths
export const PAGE_DIRECTORY_QUERY = `/* PAGE_DIRECTORY_QUERY */
  SELECT
      a_level,
      a_title,
      b_level,
      b_title,
      c_level,
      c_title,
      d_level,
      d_title,
      page_code,
      page_filters,
      page_title,
      options,
      notes,
      slug
  FROM
      cc_pagedirectory_1

  ORDER BY
      page_code`;

//GetStaticProps
export const PAGE_CONTENT_QUERY = `/* PAGE_CONTENT_QUERY */
  SELECT
      page_code,
      element_order,
      element_type,
      element_header,
      element_text,
      element_footer,
      element_position,
      element_width,
      data_query,
      options
  FROM
      cc_pagecontent_1
  WHERE
      page_code = 'A1B1'
  ORDER BY
      element_order`;
      