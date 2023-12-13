/* 2023-12-05 11:10:02 [26 ms] */ 
CREATE Table users(
    id int not null primary key generated always as identity,
    prenom varchar(255),
    nom varchar(255),
    date_de_naissance DATE
);
/* 2023-12-05 11:32:23 [7 ms] */ 
-- Active: 1701767144984@@127.0.0.1@5432@postgres@public
-- CREATE Table users(
--     id int not null primary key generated always as identity,
--     prenom varchar(255),
--     nom varchar(255),
--     date_de_naissance DATE
-- );

INSERT into users (prenom,nom,date_de_naissance)
VALUES ('Sofiain','Khaldi','1999-05-14');
INSERT into users (prenom,nom,date_de_naissance)
VALUES ('Romain','Wyon','1999-05-15');

INSERT into users (prenom,nom,date_de_naissance)
VALUES ('Syrrine','Khaldi','1997-10-14');

INSERT into users (prenom,nom,date_de_naissance)
VALUES ('Julie','Dewallens','1978-06-14');
/* 2023-12-05 11:47:56 [13 ms] */ 
-- Active: 1701767144984@@127.0.0.1@5432@postgres@public
-- CREATE Table users(
--     id int not null primary key generated always as identity,
--     prenom varchar(255),
--     nom varchar(255),
--     date_de_naissance DATE
-- );

-- INSERT into users (prenom,nom,date_de_naissance)
-- VALUES ('Sofiain','Khaldi','1999-05-14');
-- INSERT into users (prenom,nom,date_de_naissance)
-- VALUES ('Romain','Wyon','1999-05-15');

-- INSERT into users (prenom,nom,date_de_naissance)
-- VALUES ('Syrrine','Khaldi','1997-10-14');

-- INSERT into users (prenom,nom,date_de_naissance)
-- VALUES ('Julie','Dewallens','1978-06-14');

CREATE Table city(
    id int not null primary key generated always as identity,
    nom varchar(255),
    pays varchar(255)
);

INSERT into city(nom,pays)
VALUES ('Wesh city','yolo land');

INSERT into city(nom,pays)
VALUES ('Procrastina','yolo land');

INSERT into city(nom,pays)
VALUES ('Pas envie tsais','yolo land');
/* 2023-12-05 11:55:02 [3 ms] */ 
INSERT into city(nom,pays)
VALUES ('Pas envie tsais','yolo land');
/* 2023-12-05 11:55:25 [3 ms] */ 
INSERT into city(nom,pays)
VALUES ('Wesh city','yolo land');
/* 2023-12-05 11:56:02 [3 ms] */ 
DELETE FROM "city" WHERE "id"=3;
/* 2023-12-05 11:56:07 [2 ms] */ 
DELETE FROM "city" WHERE "id"=5;
/* 2023-12-05 12:07:29 [3 ms] */ 
ALTER table users add column ville_id int;
/* 2023-12-05 12:15:47 [2 ms] */ 
-- Active: 1701767144984@@127.0.0.1@5432@postgres@public
-- CREATE Table users(
--     id int not null primary key generated always as identity,
--     prenom varchar(255),
--     nom varchar(255),
--     date_de_naissance DATE
-- );

-- INSERT into users (prenom,nom,date_de_naissance)
-- VALUES ('Sofiain','Khaldi','1999-05-14');
-- INSERT into users (prenom,nom,date_de_naissance)
-- VALUES ('Romain','Wyon','1999-05-15');

-- INSERT into users (prenom,nom,date_de_naissance)
-- VALUES ('Syrrine','Khaldi','1997-10-14');

-- INSERT into users (prenom,nom,date_de_naissance)
-- VALUES ('Julie','Dewallens','1978-06-14');

-- CREATE Table city(
--     id int not null primary key generated always as identity,
--     nom varchar(255),
--     pays varchar(255)
-- );

-- INSERT into city(nom,pays)
-- VALUES ('Wesh city','yolo land');

-- INSERT into city(nom,pays)
-- VALUES ('Procrastina','yolo land');

-- INSERT into city(nom,pays)
-- VALUES ('Pas envie tsais','yolo land');

-- ALTER table users add column ville_id int

UPDATE users set ville_id = 2;

UPDATE users set ville_id = 1 where id=1;

UPDATE users set ville_id = 3 where id=4;
/* 2023-12-05 12:24:58 [3 ms] */ 
SELECT * FROM users,city WHERE users.ville_id = city.id LIMIT 100 OFFSET 0;
/* 2023-12-05 12:31:48 [1 ms] */ 
SELECT users.nom, users.prenom, city.nom from users, city where users.ville_id = city.id LIMIT 100 OFFSET 0;
/* 2023-12-05 14:18:18 [3 ms] */ 
create table emp
(
noemp int not null,
nom varchar(20),
prenom varchar(20),
emploi varchar(20),
sup int,
embauche date,
sal float,
comm float,
noserv int,
noproj int
);
/* 2023-12-05 14:21:33 [4 ms] */ 
create table serv
(
noserv int not null,
service varchar(20),
ville varchar(20)
);
/* 2023-12-05 14:24:03 [3 ms] */ 
insert into emp values (1615,'DUPREZ','JEAN','BALAYEUR',1000,'1998-10-22',6000.6,null,5,null);
/* 2023-12-05 14:28:12 [6 ms] */ 
-- Active: 1701767144984@@127.0.0.1@5432@postgres@public

create table emp
(
noemp int not null,
nom varchar(20),
prenom varchar(20),
emploi varchar(20),
sup int,
embauche date,
sal float,
comm float,
noserv int,
noproj int
);


create table serv
(
noserv int not null,
service varchar(20),
ville varchar(20)
);

insert into serv values (1,'DIRECTION','PARIS');
insert into serv values (2,'LOGISTIQUE','SECLIN');
insert into serv values (3,'VENTES','ROUBAIX');
insert into serv values (4,'FORMATION','VILLENEUVE D ASCQ');
insert into serv values (5,'INFORMATIQUE','LILLE');
insert into serv values (6,'COMPTABILITE','LILLE');
insert into serv values (7,'TECHNIQUE','ROUBAIX');

insert into emp values (1000,'LEROY','PAUL','PRESIDENT',null,'1987-10-25',55005.5,null,1,null);
insert into emp values (1100,'DELPIERRE','DOROTHEE','SECRETAIRE',1000,'1987-10-25',12351.24,null,1,null);
insert into emp values (1101,'DUMONT','LOUIS','VENDEUR',1300,'1987-10-25',9047.9,0,1,null);
insert into emp values (1102,'MINET','MARC','VENDEUR',1300,'1987-10-25',8085.81,17230,1,null);
insert into emp values (1104,'NYS','ETIENNE','TECHNICIEN',1200,'1987-10-25',12342.23,null,1,null);
insert into emp values (1105,'DENIMAL','JEROME','COMPTABLE',1600,'1987-10-25',15746.57,null,1,null);
insert into emp values (1200,'LEMAIRE','GUY','DIRECTEUR',1000,'1987-03-11',36303.63,null,2,null);
insert into emp values (1201,'MARTIN','JEAN','TECHNICIEN',1200,'1987-06-25',11235.12,null,2,null);
insert into emp values (1202,'DUPONT','JACQUES','TECHNICIEN',1200,'1988-10-30',10313.03,null,2,null);
insert into emp values (1300,'LENOIR','GERARD','DIRECTEUR',1000,'1987-04-02',31353.14,13071,3,null);
insert into emp values (1301,'GERARD','ROBERT','VENDEUR',1300,'1999-04-16',7694.77,12430,3,null);
insert into emp values (1303,'MASURE','EMILE','TECHNICIEN',1200,'1988-06-17',10451.05,null,3,null);
insert into emp values (1500,'DUPONT','JEAN','DIRECTEUR',1000,'1987-10-23',28434.84,null,5,null);
insert into emp values (1501,'DUPIRE','PIERRE','ANALYSTE',1500,'1984-10-24',23102.31,null,5,null);
insert into emp values (1502,'DURAND','BERNARD','PROGRAMMEUR',1500,'1987-07-30',13201.32,null,5,null);
insert into emp values (1503,'DELNATTE','LUC','PUPITREUR',1500,'1999-01-15',8801.01,null,5,null);
insert into emp values (1600,'LAVARE','PAUL','DIRECTEUR',1000,'1991-12-13',31238.12,null,6,null);
insert into emp values (1601,'CARON','ALAIN','COMPTABLE',1600,'1985-09-16',33003.3,null,6,null);
insert into emp values (1602,'DUBOIS','JULES','VENDEUR',1300,'1990-12-20',9520.95,35535,6,null);
insert into emp values (1603,'MOREL','ROBERT','COMPTABLE',1600,'1985-07-18',33003.3,null,6,null);
insert into emp values (1604,'HAVET','ALAIN','VENDEUR',1300,'1991-01-01',9388.94,33415,6,null);
insert into emp values (1605,'RICHARD','JULES','COMPTABLE',1600,'1985-10-22',33503.35,null,5,null);
insert into emp values (1615,'DUPREZ','JEAN','BALAYEUR',1000,'1998-10-22',6000.6,null,5,null);
/* 2023-12-05 14:30:28 [3 ms] */ 
select * from emp LIMIT 100 OFFSET 0;
/* 2023-12-05 14:31:55 [2 ms] */ 
select * from serv LIMIT 100 OFFSET 0;
/* 2023-12-05 14:33:04 [4 ms] */ 
select * from emp LIMIT 100 OFFSET 0;
/* 2023-12-05 14:36:48 [2 ms] */ 
select nom,prenom from emp LIMIT 100 OFFSET 0;
/* 2023-12-05 14:37:42 [2 ms] */ 
select emploi from emp LIMIT 100 OFFSET 0;
/* 2023-12-05 14:43:03 [1 ms] */ 
select DISTINCT emploi from emp LIMIT 100 OFFSET 0;
/* 2023-12-05 14:44:42 [1 ms] */ 
select nom,prenom from emp where noserv = 3 LIMIT 100 OFFSET 0;
/* 2023-12-05 14:47:01 [3 ms] */ 
select nom,prenom,noemp,noserv from emp where emploi = 'TECHNICIEN' LIMIT 100 OFFSET 0;
/* 2023-12-05 14:49:16 [3 ms] */ 
select service,noserv from serv where noserv > 2 LIMIT 100 OFFSET 0;
/* 2023-12-05 14:50:23 [3 ms] */ 
select service,noserv from serv where noserv >= 2 LIMIT 100 OFFSET 0;
/* 2023-12-05 14:52:35 [2 ms] */ 
select nom,prenom from emp where comm < sal LIMIT 100 OFFSET 0;
/* 2023-12-05 14:53:33 [3 ms] */ 
select nom,prenom from emp where comm < 0 LIMIT 100 OFFSET 0;
/* 2023-12-05 14:53:57 [2 ms] */ 
select nom,prenom from emp where comm < NULL LIMIT 100 OFFSET 0;
/* 2023-12-05 14:54:19 [3 ms] */ 
select nom,prenom from emp where comm = NULL LIMIT 100 OFFSET 0;
/* 2023-12-05 14:55:07 [3 ms] */ 
select nom,prenom from emp where comm is null LIMIT 100 OFFSET 0;
/* 2023-12-05 14:55:46 [3 ms] */ 
select nom,prenom from emp where comm is not null LIMIT 100 OFFSET 0;
/* 2023-12-05 14:56:54 [3 ms] */ 
select nom,prenom from emp where  sup is not null LIMIT 100 OFFSET 0;
/* 2023-12-05 14:59:18 [3 ms] */ 
select nom,emploi from emp where sal > 2000 and noserv = 5 LIMIT 100 OFFSET 0;
/* 2023-12-05 15:01:18 [2 ms] */ 
select nom,prenom from emp where emploi = 'PRESIDENT' OR emploi = 'DIRECTEUR' LIMIT 100 OFFSET 0;
/* 2023-12-05 15:01:30 [3 ms] */ 
select nom,prenom,emploi from emp where emploi = 'PRESIDENT' OR emploi = 'DIRECTEUR' LIMIT 100 OFFSET 0;
/* 2023-12-05 15:03:04 [2 ms] */ 
select nom,prenom,emploi from emp where noserv != 3 and emploi = 'DIRECTEUR' LIMIT 100 OFFSET 0;
/* 2023-12-05 15:04:22 [3 ms] */ 
select nom,prenom,emploi from emp where noserv = 1 and (emploi = 'DIRECTEUR' or  emploi = 'TECHNICIEN') LIMIT 100 OFFSET 0;
/* 2023-12-05 15:09:22 [3 ms] */ 
select nom,prenom,emploi from emp where emploi = 'TECHNICIEN' or emploi ='COMPTABLE' or emploi = 'VENDEUR' LIMIT 100 OFFSET 0;
/* 2023-12-05 15:10:44 [4 ms] */ 
select nom,prenom,emploi from emp where emploi = 'DIRECTEUR' and (noserv = 2 or noserv = 4 or noserv = 5) LIMIT 100 OFFSET 0;
/* 2023-12-05 15:12:37 [3 ms] */ 
select nom,prenom,emploi from emp where sal BETWEEN  20000 AND 40000 LIMIT 100 OFFSET 0;
/* 2023-12-05 15:29:09 [3 ms] */ 
select nom,prenom,emploi from emp where extract(year from embauche) = '1988' LIMIT 100 OFFSET 0;
/* 2023-12-05 15:31:09 [1 ms] */ 
select nom,prenom,emploi from emp where extract(year from embauche) = '1988' and emploi != 'DIRECTEUR' LIMIT 100 OFFSET 0;
/* 2023-12-05 15:34:11 [5 ms] */ 
select nom,prenom from emp where nom like 'M%' LIMIT 100 OFFSET 0;
/* 2023-12-05 15:41:32 [2 ms] */ 
SELECT * FROM emp WHERE REGEXP_COUNT(nom, 'E') >= 2 LIMIT 100 OFFSET 0;
/* 2023-12-05 15:43:37 [1 ms] */ 
select nom from emp where regexp_count(nom, 'E') >= 2 LIMIT 100 OFFSET 0;
/* 2023-12-05 15:44:34 [1 ms] */ 
select nom from emp where regexp_count(nom, 'E') = 1 LIMIT 100 OFFSET 0;
/* 2023-12-05 15:55:20 [3 ms] */ 
select nom,prenom,noserv,sal from emp order by sal LIMIT 100 OFFSET 0;
/* 2023-12-05 15:56:36 [4 ms] */ 
select nom,prenom,noserv,sal from emp order by sal DESC LIMIT 100 OFFSET 0;
/* 2023-12-05 15:57:35 [3 ms] */ 
select nom,prenom,noserv,sal from emp order by nom LIMIT 100 OFFSET 0;
/* 2023-12-05 15:58:26 [2 ms] */ 
select nom,prenom,noserv,sal from emp order by nom,prenom LIMIT 100 OFFSET 0;
/* 2023-12-05 16:12:17 [6 ms] */ 
ALTER table emp add column nom_service TEXT;
/* 2023-12-06 09:16:54 [4 ms] */ 
select emp,prenom from emp LIMIT 100 OFFSET 0;
/* 2023-12-06 09:17:23 [1 ms] */ 
select nom,prenom,noserv from emp LIMIT 100 OFFSET 0;
/* 2023-12-06 09:40:49 [3 ms] */ 
select emp.nom,emp.prenom,serv.service from emp, serv where emp.noemp = serv.noserv LIMIT 100 OFFSET 0;
/* 2023-12-06 09:41:07 [1 ms] */ 
select emp.nom,emp.prenom,serv.service from emp, serv LIMIT 100 OFFSET 0;
/* 2023-12-06 09:54:02 [2 ms] */ 
select emp.nom,emp.prenom,serv.service from emp,serv where emp.noserv = serv.noserv LIMIT 100 OFFSET 0;
/* 2023-12-06 09:57:51 [2 ms] */ 
ALTER table emp drop COLUMN nom_service;
/* 2023-12-06 10:14:19 [1 ms] */ 
SELECT emp.nom, emp.prenom, emp.nom AS nom2, emp.prenom FROM emp LIMIT 100 OFFSET 0;
/* 2023-12-06 10:17:49 [2 ms] */ 
SELECT emp.nom, emp.prenom, emp.nom AS superieur, emp.prenom FROM emp LIMIT 100 OFFSET 0;
/* 2023-12-06 10:18:13 [2 ms] */ 
SELECT emp.nom, emp.prenom AS superieur, emp.prenom FROM emp LIMIT 100 OFFSET 0;
/* 2023-12-06 10:18:30 [1 ms] */ 
SELECT emp.nom, emp.prenom, emp.sup AS superieur, emp.prenom FROM emp LIMIT 100 OFFSET 0;
/* 2023-12-06 10:19:19 [3 ms] */ 
SELECT emp.nom, emp.prenom, emp.nom AS superieur, emp.prenom FROM emp LIMIT 100 OFFSET 0;
/* 2023-12-06 10:20:28 [3 ms] */ 
SELECT emp.nom, emp.prenom, emp.nom AS superieur, emp.prenom FROM emp where sup != 0 LIMIT 100 OFFSET 0;
/* 2023-12-06 10:37:13 [3 ms] */ 
SELECT
    emp.prenom AS prenom_emp,
    emp.nom AS nom_emp,
    sup.prenom AS prenom_sup,
    sup.nom AS nom_sup
FROM emp, emp sup
WHERE emp.sup = sup.noemp LIMIT 100 OFFSET 0;
/* 2023-12-06 10:38:11 [1 ms] */ 
SELECT emp.prenom, emp.nom, sup.prenom, sup.nom FROM emp, emp sup WHERE emp.sup = sup.noemp LIMIT 100 OFFSET 0;
/* 2023-12-06 10:41:02 [2 ms] */ 
SELECT emp.prenom, emp.nom sup, sup.prenom, sup.nom FROM emp, emp sup WHERE emp.sup = sup.noemp LIMIT 100 OFFSET 0;
/* 2023-12-06 10:41:56 [1 ms] */ 
SELECT emp.sup, emp.prenom, emp.nom, sup.prenom, sup.nom FROM emp, emp sup WHERE emp.sup = sup.noemp LIMIT 100 OFFSET 0;
/* 2023-12-06 10:46:50 [1 ms] */ 
SELECT emp.prenom, emp.nom, sup.prenom, sup.nom FROM emp, emp sup WHERE emp.sup = sup.noemp LIMIT 100 OFFSET 0;
/* 2023-12-06 10:52:08 [7 ms] */ 
CREATE Table projet(
    id int not null primary key generated always as identity,
    noproj INT,
    nomproj varchar(255),
    capital FLOAT
);
/* 2023-12-06 10:53:20 [2 ms] */ 
insert into projet (nomproj,capital) values ('ALPHA',500000.0);
/* 2023-12-06 10:53:23 [1 ms] */ 
insert into projet (nomproj,capital) values ('BETA', 750000.5);
/* 2023-12-06 10:53:24 [2 ms] */ 
insert into projet (nomproj,capital) values ('GAMMA', 1000000.25);
/* 2023-12-06 10:53:54 [1 ms] */ 
select * from projet LIMIT 100 OFFSET 0;
/* 2023-12-06 10:55:30 [2 ms] */ 
insert into serv values (8, 'SAV', 'LOMME');
/* 2023-12-06 11:05:57 [2 ms] */ 
insert into emp values (1313,'KHALDI','SOFIAIN','DIRECTEUR',1000,'2022-01-19',1000000.0,null,8,null);
/* 2023-12-06 11:09:33 [3 ms] */ 
UPDATE emp SET sal = sal * 2 WHERE noemp = 1313;
/* 2023-12-06 11:16:11 [2 ms] */ 
update emp set noproj = 1 where sal < 9000;
/* 2023-12-06 11:20:17 [3 ms] */ 
update emp set noproj = 2 where emploi = 'VENDEUR' or emploi = 'PROGRAMMEUR' or emploi = 'PUPITREUR' or emploi = 'ANALYSTE';
/* 2023-12-06 11:21:07 [3 ms] */ 
update emp set noproj = 1 where sal < 9000;
/* 2023-12-06 11:22:38 [1 ms] */ 
update emp set noproj = 2 where emploi ISNULL and (emploi = 'VENDEUR' or emploi = 'PROGRAMMEUR' or emploi = 'PUPITREUR' or emploi = 'ANALYSTE');
/* 2023-12-06 11:25:35 [1 ms] */ 
update emp set noproj = 3 where emploi ISNULL;
/* 2023-12-06 11:26:04 [2 ms] */ 
update emp set noproj = 3 where emploi IS NULL;
/* 2023-12-06 11:26:55 [2 ms] */ 
update emp set noproj = 3 where noproj IS NULL;
/* 2023-12-06 11:31:24 [1 ms] */ 
delete from emp where emploi = 'PRESIDENT';
/* 2023-12-06 11:32:51 [3 ms] */ 
update emp set emploi = 'PRESIDENT' where noemp = 1313;
/* 2023-12-06 11:34:10 [1 ms] */ 
update emp set sup = 1313 where sup = 1000;
/* 2023-12-06 11:34:39 [1 ms] */ 
update emp set sup = 1000 where sup = 1313;
/* 2023-12-06 11:35:22 [3 ms] */ 
update emp set sup = null where noemp = 1313;
/* 2023-12-06 11:35:54 [1 ms] */ 
update emp set sup = 1000 where sup = 1313;
/* 2023-12-06 11:36:15 [2 ms] */ 
update emp set sup = 1313 where sup = 1000;
/* 2023-12-06 12:09:50 [3 ms] */ 
update emp set emploi = 'PRESIDENT' where noemp = 1313;
/* 2023-12-06 12:12:09 [1 ms] */ 
update emp set emploi = 'PRESIDENT',  sal = sal*4 where noemp = 1313;
/* 2023-12-08 16:12:18 [8 ms] */ 
CREATE Table formulaire(
    id int not null primary key generated always as identity,
    titreOriginal varchar(255),
    titreFrancais varchar(255),
    origine varchar(255),
    annee_de_diffusion INT,
    nombre_d_episode INT,
    studio_animation varchar(255),
    synob varchar(1000),
    img BYTEA
);
