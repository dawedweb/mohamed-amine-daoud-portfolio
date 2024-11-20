// Copyright 2024 dawed
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import { useParams } from 'react-router-dom'  // Pour récupérer les paramètres d'URL
import mywork_data from '../../assets/mywork_data'

const WorkDetail = () => {
  const { id } = useParams()  // Récupérer l'ID du travail à partir de l'URL
  const work = mywork_data.find(item => item.w_no === parseInt(id))

  if (!work) {
    return <div>Travail non trouvé</div>
  }

  return (
    <div className="work-detail">
      <h1>{work.w_name}</h1>
      <img src={work.w_img} alt={work.w_name} />
      <p>Détails du travail {work.w_name}</p>
    </div>
  )
}

export default WorkDetail