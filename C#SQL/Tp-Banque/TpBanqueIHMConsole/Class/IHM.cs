using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using TpBanqueBaseClass.Class;
using TpBanqueIHMConsole.Tools;

namespace TpBanqueIHMConsole.Class
{
    internal class IHM
    {
        private Bank banque;
        public IHM()
        {
            Init();
        }
        
        private void Init()
        {
            banque = new();
            banque.Injecter();
            //Compte compte = new(nom prenom);
            //banque.AjouterCompte(compte);
        }

        public void Start()
        {

            string choix = "";

            do
            {
                bool valid = false;
                Menu();
                Console.Write("\n\nEntrez votre choix : ");
                choix = Console.ReadLine();
                while (!valid)
                {
                    if (choix != "1" && choix != "2" && choix != "3" && choix != "0" && choix != "4" && choix != "5")
                    {
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.Write("Erreur de saisie, entrez votre choix : ");
                        Console.ForegroundColor = ConsoleColor.White;
                        choix = Console.ReadLine();
                    }
                    else
                        valid = true;
                }
                switch (choix)
                {
                    case "1":
                        Console.Clear();
                        CreateAcc();
                        WaitAndClear();
                        break;

                    case "2":
                        Console.Clear();
                        PutMoney();
                        WaitAndClear();
                        break;

                    case "3":
                        Console.Clear();
                        GetMoney();
                        WaitAndClear();

                        break;

                    case "4":
                        Console.Clear();
                        ShowAcc();
                        WaitAndClear();
                        break;

                    case "5":
                        Console.Clear();
                        CalculInt();
                        WaitAndClear();
                        break;

                    case "0":
                        Environment.Exit(0);
                        break;

                }
            } while (choix != "0");
        }

        private void Menu()
        {
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("----- Banque -----");
            Console.ForegroundColor = ConsoleColor.White;
            Console.WriteLine("\n1- Créer un compte bancaire");
            Console.WriteLine("\n2- Effectuer un dépôt");
            Console.WriteLine("\n3- Effectuer un retrait");
            Console.WriteLine("\n4- Opérations et soldes");
            Console.WriteLine("\n5- Calculer les intérêts");
            MyConsoleColor.OnRedInput("\n0-- Quitter");
        }


        private void CreateAcc()
        {
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("***** Création d'un nouveau compte *****");
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("\nNom du client :");
            string nom = Console.ReadLine();
            Console.Write("\nPrenom du client :");
            string prenom = Console.ReadLine();
            Console.Write("\nTéléphone du client :");
            string telephone = Console.ReadLine();
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("\nCompte créé, voici le numéro :");
            Console.ForegroundColor = ConsoleColor.White;

        }

        private void PutMoney()
        {
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("***** Effectuer un dépôt *****");
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Merci d'entrer le numéro du compte:");
            Console.ReadLine();
            Console.WriteLine("Merci de saisir le montant du dépôt:");
            Console.ReadLine();
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Dépôt réussi");
            Console.ForegroundColor = ConsoleColor.White;
        }

        private void GetMoney()
        {
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("***** Effectuer un retrait *****");
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Merci d'entrer le numéro du compte:");
            Console.ReadLine();
            Console.WriteLine("Merci de saisir le montant du dépôt:");
            Console.ReadLine();
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Retrait réussi");
            Console.ForegroundColor = ConsoleColor.White;
        }
        private void ShowAcc()
        {
        Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("***** Rechercher un compte *****");
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Merci d'entrer le numéro du compte:");
            Console.ReadLine();
            
        }
        private void CalculInt()
        {   Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("***** Calcul des Intérêts *****");
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Merci d'entrer le numéro du compte:");
            Console.ReadLine();
        }


        private void WaitAndClear()
        {
            MyConsoleColor.OnDarkCyanInput("\nAppuyez sur ENTER pour retourner au menu principal...");
            Console.ReadLine();
            Console.Clear();
        }

    }
}
