/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const TrackListContainer = styled.div`
    height: 493px;
    width: 1100px;
    // overflow-y: scroll

    --scrollbar-width: 8px;

    /* mask fade distance, for use in mask calculations */
    --mask-height: 32px;

    /* If content exceeds height of container, overflow! */
    overflow-y: auto;


    /* Need to make sure container has bottom space,
  otherwise content at the bottom is always faded out */
    padding-bottom: var(--mask-height);



    /* The CSS mask */

    /* The content mask is a linear gradient from top to bottom */
    --mask-image-content: linear-gradient(
        to bottom,
        transparent,
        black var(--mask-height),
        black calc(100% - var(--mask-height)),
        transparent
    );

    /* Here we scale the content gradient to the width of the container 
  minus the scrollbar width. The height is the full container height */
    --mask-size-content: calc(100% - var(--scrollbar-width)) 100%;

    /* The scrollbar mask is a black pixel */
    --mask-image-scrollbar: linear-gradient(black, black);

    /* The width of our black pixel is the width of the scrollbar.
  The height is the full container height */
    --mask-size-scrollbar: var(--scrollbar-width) 100%;

    /* Apply the mask image and mask size variables */
    mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
    mask-size: var(--mask-size-content), var(--mask-size-scrollbar);

    /* Position the content gradient in the top left, and the 
  scroll gradient in the top right */
    mask-position: 0 0, 100% 0;

    /* We don't repeat our mask images */
    mask-repeat: no-repeat, no-repeat;

    
    
`;