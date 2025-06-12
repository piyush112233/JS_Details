/** ************************************************************ Level == Basic ****************************************************************************** */

/**
 * Q1 Show first name, last name, and gender of patients whose gender is 'M'
  Answer = select first_name, last_name, gender from patients where gender = "M"
**/

/**
Q2 -Show first name and last name of patients who does not have allergies. (null)
Answer = select first_name,last_name from patients where allergies IS null
**/

/**
 * Q3 Show first name of patients that start with the letter 'C'
 * Answer = Show first name of patients that start with the letter 'C'
 */

/**
 * Q4 Show first name and last name of patients that weight within the range of 100 to 120 (inclusive)
 * Answer = select first_name,last_name from patients where weight between 100 AND 120
 */

/**
 * Q5 Update the patients table for the allergies column. If the patient's allergies is null then replace it with 'NKA'
 * Answer = Update the patients table for the allergies column. If the patient's allergies is null then replace it with 'NKA'
 */

/**
 * Q6 Show first name and last name concatinated into one column to show their full name.
 * Answer =   select concat(first_name ," ", last_name) As full_name from patients 
 */

/**
 * Q7 Show first name, last name, and the full province name of each patient.
 * Answer = select p.first_name , p.last_name, fp.province_name from patients p Inner Join province_names fp ON p.province_id = fp.province_id
 */

/**
 * Q8 Show how many patients have a birth_date with 2010 as the birth year.
 * Answer = select count(*) As total_patients from patients where YEAR(birth_date) = 2010
 * Altranate is = SELECT count(first_name) AS total_patients FROM patients WHERE birth_date between '2010-01-01' AND '2010-12-31'
 * Altranate is = SELECT count(first_name) AS total_patients FROM patients WHERE birth_date >= '2010-01-01' AND birth_date <= '2010-12-31'
 */

/**
 * Q9  Show the first_name, last_name, and height of the patient with the greatest height.
 * Answer =   select first_name,last_name,Max(height) As height from patients
 * Altranate is = SELECT first_name, last_name,  height FROM patients WHERE height = ( SELECT max(height) FROM patients)
 */

/**
 * Q10 Show all columns for patients who have one of the following patient_ids : 1,45,534,879,1000
 * Answer = select * from patients where patient_id IN(1,45,534,879,1000)
 */

/**Q11 Show the total number of admissions
 * Answer = SELECT COUNT(*) AS total_admissions FROM admissions;
 */

/**
 * Q11 Show all the columns from admissions where the patient was admitted and discharged on the same day.
 * Answer = select * from admissions where admission_date = discharge_date
 */

/**
 * Q12 Show the patient id and the total number of admissions for patient_id 579.
 * Answer = select patient_id, count(*) As total_admissions from admissions where patient_id = 579
 */

/**
 * Q13 Based on the cities that our patients live in, show unique cities that are in province_id 'NS'.
 * Answer = select distinct(city) As unique_cities from patients where province_id = 'NS'
 * Altranate = SELECT city FROM patients GROUP BY city HAVING province_id = 'NS';
 */

/**
 * Q14 Write a query to find the first_name, last name and birth date of patients who has height greater than 160 and weight greater than 70
 * Answer = select first_name,last_name,birth_date from patients where height > 160 and weight > 70
 */

/**
 * Q15 Write a query to find list of patients first_name, last_name, and allergies where allergies are not null and are from the city of 'Hamilton'
 * Answer = select first_name,last_name,allergies from patients where allergies is Not null and city = 'Hamilton'
 */


/** ************************************************************ Level == Medium *****************************************************************************/

/**
 * Q1 Show patient_id and first_name from patients where their first_name start and ends with 's' and is at least 6 characters long.
 * Answer = select patient_id,first_name from patients where first_name Like 's%s' and length(first_name) >= 6
 * Altranate = SELECT patient_id, first_name FROM patients WHERE first_name LIKE 's____%s';
 * Altranate = SELECT patient_id, first_name FROM patients WHERE first_name LIKE 's%s' AND len(first_name) >= 6;
 */

/**
 * Q2 Show unique birth years from patients and order them by ascending.
 * Answer = select distinct(year(birth_date)) AS birth_year from patients order by birth_date asc
 * Altranate = SELECT year(birth_date) FROM patients GROUP BY year(birth_date)
 */

/**
 * Q3 Show unique first names from the patients table which only occurs once in the list. For example, if two or more people are named 'John' in the first_name column then don't include their name in the output list. If only 1 person is named 'Leo' then include them in the output.
 * Answer = select first_name from patients group by first_name  HAVING COUNT(*) = 1;
 * Altranate = SELECT first_name FROM ( SELECT first_name,count(first_name) AS occurrencies FROM patients GROUP BY first_name) WHERE occurrencies = 1
 */

/**
 * Q4 Show patient_id, first_name, last_name from patients whos diagnosis is 'Dementia'.
 * Answer = select p.first_name, p.last_name, p.patient_id  from patients p inner join admissions AD on p.patient_id = AD.patient_id where AD.diagnosis ='Dementia'
 * 
 */