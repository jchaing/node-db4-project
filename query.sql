select i.name, q.quantity
from recipes as r
join quantity as q on r.id = q.recipe_id
join ingredients as i on i.id = q.ingredient_id
where r.name = 'Buttermilk Pancakes'
