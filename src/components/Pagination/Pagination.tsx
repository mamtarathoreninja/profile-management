import { Pagination as PaginationComponent, PaginationProps } from 'antd'

const Pagination = (props: PaginationProps) => {
    const { current, total, onChange } = props
    return (
        <div>
            <PaginationComponent
                showSizeChanger={false}
                onChange={onChange}
                current={current}
                total={total}
            />
        </div>
    )
}

export default Pagination
