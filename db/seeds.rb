# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create({first_name: 'Tony', last_name: 'Stark', email: 'ironman@me.com', })
BloodSugar.create({glucose: '100', two_hours_later: '90',user_id:'1' })
CarbTotal.create({carbs_in_meal: '40', insulin_used: '30', user_id:'1'})