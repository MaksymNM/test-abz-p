import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import { Card } from './Card';


export const GetBlock = ({page, setPage}) => {
    const count = 6;
    const [totalPages, setTotalPages] = useState(1)
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`);
        const data = await response.json();
        setTotalPages(data.total_pages);
        const sortedArr = data.users.sort((x, y) => (
            x.registration_timestamp - y.registration_timestamp
        ))
        if(page === 1) {
            setUsers(sortedArr);
        } else {
            setUsers([...users, ...sortedArr]);   
        }
    }

    const showMore = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return (
        <div className='flex flex-col xl:w-[1168px] lg:w-[1024px] md:w-[768px] sm:w-[360px]'>
            <div className='flex justify-center mt-[140px]'>
                <div className='text-heading xl:px-0 lg:px-0 md:px-0 sm:px-4 sm:text-center'>
                    Working with GET request
                </div>
            </div>
            <div className='flex mt-[50px] xl:gap-7 lg:gap-7 md:gap-4 sm:gap-5 flex-wrap xl:px-0 lg:px-[60px] md:px-8 sm:px-4'>
            {users !== undefined ? users.map(user => (
                <Card user={user} key={user.id}/>
                )) : ''}
            </div>
            
            {totalPages === page ? '' : 
            <>
                <div className='flex justify-center mt-[50px]'>
                <Button label={'Show more'} width={'120px'}  onClick={showMore}></Button>
                </div>
            </>
            }
            
        </div>
        
        
  )
}
