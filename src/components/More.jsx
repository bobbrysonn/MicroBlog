import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export default function More({ pagination, loadNextPage }) {
    let thereAreMore = false;

    if (pagination) {
        const { offset, count, total } = pagination;
        thereAreMore = offset + count < total;
    }

    return (
        <div className="text-end mb-4">
            {thereAreMore &&
                <Button variant="outline-primary" onClick={loadNextPage} className="ms-auto">
                    More &raquo;
                </Button>
            }           
        </div>
    )
}

More.propTypes = {
    loadNextPage: PropTypes.func,
    pagination: PropTypes.shape({ offset: PropTypes.number, count: PropTypes.number, total: PropTypes.number })
}