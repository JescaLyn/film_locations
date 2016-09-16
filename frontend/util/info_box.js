export const infoBox = location => {
  const fieldTag = field => {
    if (location[field]) {
      return (`
        <p>
          ${field[0].toUpperCase() + field.slice(1)}: ${location[field]}
        </p>
      `);
    } else {
      return "";
    }
  };

  const actors = () => {
    let actorsArr = [];
    for (let i = 0; i < 3; ++i) {
      if (location[`actor_${i}`]) {
        actorsArr.push(location[`actor_${i}`]);
      }
    }
    if (actorsArr.length > 0) {
      return (`
        <p>
          Actors: ${actorsArr.join(", ")}
        </p>
      `);
    } else {
      return ""; 
    }
  };

  return (`
    <div class="info-box">
      ${fieldTag("title")}
      <p>
        Address: ${location.locations}
      </p>
      ${fieldTag("release_year")}
      ${fieldTag("production_company")}
      ${fieldTag("distributor")}
      ${fieldTag("director")}
      ${fieldTag("writer")}
      ${actors()}
      ${fieldTag("fun_facts")}
    </div>
  `);
};
