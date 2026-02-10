import React from 'react'

export default function Addemp() {
  return (
    <div className='container'>
        <div>
            <div class="mb-3">
  <label htmlFor="email" class="form-label">Email address</label>
  <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
</div>
   <div class="mb-3">
  <label htmlFor="email" class="form-label">Email address</label>
  <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
</div>
        <div>
            <button className='btn btn-primary'>Add emp</button>
        </div>


        </div>
        <div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                         <th scope="col">#</th>
                        <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>

                    </tr>

                </thead>
                 <tbody>
                            <tr>
                                <th scope="row">megha</th>
                                <td>megha@gmail.com</td>
                                <td>web developer</td>
                                <td><div className='d-flex gap-3'>
                                    <button className='btn btn-warning'>Edit</button>
                                    <button className='btn btn-danger'>delete</button>
                                </div></td>
                            </tr>

                        </tbody>
            </table>

        </div>
    </div>
  )
}

