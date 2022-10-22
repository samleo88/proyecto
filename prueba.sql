create DataBase ImagenesBD
Use ImagenesBD

create table dbo.Albumes(
IdAlbum int identity ( 1,1),
NombreAlbum varchar (500),
FotoPortada varchar (500),
IdFotos varchar (500),
FechaAlbum Date,
)

Insert into dbo.Albumes values('Anonymus','anonymous.png','https://images.app.goo.gl/yCjvbbbtEbz75L6r8','2020-10-28')

Select * From Albumes

create table dbo.Fotos(
IdFoto int identity ( 1,1),
Foto varchar (500),

)

Insert into dbo.Fotos values('https://images.app.goo.gl/kmauXUaFfuvKJ48g8')

Select * From Fotos