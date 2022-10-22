using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Albumes
    {
        public int IdAlbum { get; set; }
        public string NombreAlbum { get; set; }
        public string FotoPortada { get; set; }
        public string Idfotos { get; set; }
        public string FechaAlbum { get; set; }
    }
}