<?php

/**
 * My Application
 *
 * @copyright  Copyright (c) 2010 John Doe
 * @package    MyApplication
 */



/**
 * Homepage presenter.
 *
 * @author     John Doe
 * @package    MyApplication
 */
class HomepagePresenter extends BasePresenter
{

	public function actionNotify()
	{
		$this->flashMessage("This is standart notification / flash message", 'success', 'Showing success');
		$this->flashMessage("This is standart notification / flash message", 'info', 'Showing information');
		$this->flashMessage("This is standart notification / flash message", 'warning', 'Showing warning');
		$this->flashMessage("This is standart notification / flash message", 'error', 'Showing error');

		$this->redirect('default');
	}


	public function handleNotify()
	{
		$this->flashMessage("This is ajax notification / flash message", 'success', 'Showing success');
		$this->flashMessage("This is ajax notification / flash message", 'info', 'Showing information');
		$this->flashMessage("This is ajax notification / flash message", 'warning', 'Showing warning');
		$this->flashMessage("This is ajax notification / flash message", 'error', 'Showing error');
	}


	public function renderDefault()
	{
		$this->template->anyVariable = 'any value';
	}

}
