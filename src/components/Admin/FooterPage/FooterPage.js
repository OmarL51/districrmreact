import React from 'react'
import { Pagination } from 'semantic-ui-react'



export function FooterPage(props) {
    const PaginationExamplePagination = () => (
        <Pagination defaultActivePage={5} totalPages={10} />
      )
  return (
    <div aria-label="Pagination Navigation" role="navigation" class="ui pagination menu"><a aria-current="false" aria-disabled="false" tabindex="0" value="1" aria-label="First item" type="firstItem" class="item">«</a><a aria-current="false" aria-disabled="false" tabindex="0" value="4" aria-label="Previous item" type="prevItem" class="item">⟨</a><a aria-current="false" aria-disabled="false" tabindex="0" value="1" type="pageItem" class="item">1</a><a aria-current="false" aria-disabled="true" tabindex="-1" value="3" type="ellipsisItem" class="item">...</a><a aria-current="false" aria-disabled="false" tabindex="0" value="4" type="pageItem" class="item">4</a><a aria-current="true" aria-disabled="false" tabindex="0" value="5" type="pageItem" class="active item">5</a><a aria-current="false" aria-disabled="false" tabindex="0" value="6" type="pageItem" class="item">6</a><a aria-current="false" aria-disabled="true" tabindex="-1" value="7" type="ellipsisItem" class="item">...</a><a aria-current="false" aria-disabled="false" tabindex="0" value="10" type="pageItem" class="item">10</a><a aria-current="false" aria-disabled="false" tabindex="0" value="6" aria-label="Next item" type="nextItem" class="item">⟩</a><a aria-current="false" aria-disabled="false" tabindex="0" value="10" aria-label="Last item" type="lastItem" class="item">»</a></div>

  )
}