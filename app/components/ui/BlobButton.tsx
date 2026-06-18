import React from 'react';

/** Gooey blob layer for `.blob-btn` — pair with the `blob-btn` / `blob-btn--circle` classes. */
export const BlobBackground: React.FC = () => (
    <span className="blob-btn__inner" aria-hidden="true">
        <span className="blob-btn__blobs">
            <span className="blob-btn__blob" />
            <span className="blob-btn__blob" />
            <span className="blob-btn__blob" />
            <span className="blob-btn__blob" />
        </span>
    </span>
);
