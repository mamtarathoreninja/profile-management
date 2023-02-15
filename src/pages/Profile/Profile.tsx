import { useParams, useNavigate } from 'react-router-dom'
import { Badge, Col, Row, Spin } from 'antd';
import { LeftOutlined } from '@ant-design/icons'

import { useProfileQuery } from 'store/profile/profile.slice'
import { profileStatus } from 'helpers/profileStatus';
import './Profile.scss'

const Profile = () => {
    const navigate = useNavigate()
    const { character_id } = useParams()

    const { data, isLoading } = useProfileQuery(character_id)

    const breadCrumbElement = () => (
        <div onClick={() => navigate('/')}>
            <LeftOutlined /> Home
        </div>
    )

    if (!data) {
        return <div>
            {breadCrumbElement()}
            <div>No Data Found</div>
        </div>
    }


    return (
        <div className='profile-wrap'>
            {isLoading && (
                <div className='spin-wrap'>
                    <Spin />
                </div>
            )}
            <Row>
                <Col span={24}>
                    <div className='profile-img-wrap'>
                        <div className='breadcrumb-wrap'>{breadCrumbElement()}</div>
                        <div className='cover-img'></div>
                        <div className='profile-img'>
                            <img src={data.image} alt={`character-${data.id}`} />
                            <Badge status={profileStatus(data.status)} />
                        </div>
                    </div>
                </Col>
                <Col span={24}>
                    <div className='profile-data'>
                        <Row>
                            <Col span={24}>
                                <div className='profile-data-list'>
                                    <div className='profile-name'>{data.name}</div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className='profile-data-list'>
                                    <span>Species: </span>
                                    <span>{data.species}</span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className='profile-data-list'>
                                    <span>Type: </span>
                                    <span>{data.type}</span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className='profile-data-list'>
                                    <span>Gender: </span>
                                    <span>{data.gender}</span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className='profile-data-list'>
                                    <span>Location: </span>
                                    <span>{data.location.name}</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default Profile